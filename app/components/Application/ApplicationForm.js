"use client";

import { useForm } from "react-hook-form";
import { useState, useMemo } from "react";
import { heroClasses } from "../../data/ApplicationData";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import InputText from "../../components/InputText";
import InputRadio from "../../components/InputRadio";
import InputSelect from "../../components/InputSelect";
import classes from "../../styles/Application.module.css";

async function addApplicationHandler(enteredApplicationData) {
  try {
    const response = await fetch("/api/new-application", {
      method: "POST",
      body: JSON.stringify(enteredApplicationData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to submit application");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function ApplicationForm() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const {
    setValue,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const role = watch("role");
  console.log(role);

  const roleClasses = useMemo(() => {
    switch (role) {
      case "Tank": {
        setValue("main", heroClasses.tank[0]);
        return heroClasses.tank;
      }
      case "Healer": {
        setValue("main", heroClasses.healer[0]);
        return heroClasses.healer;
      }
      case "DPS": {
        setValue("main", heroClasses.dps[0]);
        return heroClasses.dps;
      }
      default: {
        return [];
      }
    }
  }, [role]);

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data) => addApplicationHandler(data),
  });

  function onFinishApplication() {
    console.log("Application successfully submitted!");
    // add redirect once it works
  }

  const onSubmit = (data) => {
    if (isCaptchaVerified) {
      mutate(data, { onSuccess: onFinishApplication });
    } else {
      alert(
        "Please complete the reCAPTCHA to be able to submit your application."
      );
    }
  };

  console.log(errors);

  function onChange(value) {
    if (value) {
      setIsCaptchaVerified(true);
    }
  }

  return (
    <main className={classes.main}>
      <h1>Application Form</h1>
      <form className={classes.application} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.area}>
          <InputText
            id="name"
            name="name"
            control={control}
            label="Name"
            placeholder="Enter your name"
            rules={{ required: "Name is required" }}
          />
          {errors.name && (
            <p className={classes.error}>{errors.name.message}</p>
          )}
        </div>
        <div className={classes.area}>
          <InputText
            id="discord"
            name="discord"
            control={control}
            label="Discord"
            placeholder="Enter your Discord ID"
            rules={{ required: "Discord ID is required" }}
          />
          {errors.discord && (
            <p className={classes.error}>{errors.discord.message}</p>
          )}
        </div>

        <div className={classes.area}>
          <InputRadio
            id="raidtype"
            label="What level of raiding are you interested in?"
            options={["Normal/Heroic", "Mythic"]}
            control={control}
            name="raidtype"
            rules={{ required: "Raid type is required" }}
          />
          {errors.raidtype && (
            <p className={classes.error}>{errors.raidtype.message}</p>
          )}
        </div>

        <div className={classes.area}>
          <InputSelect
            id="role"
            label="Choose your role:"
            options={["Tank", "Healer", "DPS"]}
            control={control}
            name="role"
            rules={{ required: "Role is required" }}
          />
          {errors.role && (
            <p className={classes.error}>{errors.role.message}</p>
          )}
        </div>

        <div className={classes.area}>
          <InputSelect
            id="main"
            label="Choose your main:"
            options={roleClasses}
            control={control}
            name="main"
            rules={{ required: "Main is required" }}
          />
          {errors.main && (
            <p className={classes.error}>{errors.main.message}</p>
          )}
        </div>

        <div className={classes.area}>
          <InputText
            id="logs"
            name="logs"
            control={control}
            label="Warcraftlogs link"
            placeholder="Enter Warcraft logs link"
            rules={{ required: "Warcraftlogs link is required" }}
          />
          {errors.logs && (
            <p className={classes.error}>{errors.logs.message}</p>
          )}
        </div>

        <div className={classes.area}>
          <InputRadio
            id="mic"
            label="Do you have a working microphone?"
            options={["Yes", "No"]}
            control={control}
            name="mic"
            rules={{ required: "Microphone status is required" }}
          />
          {errors.mic && <p className={classes.error}>{errors.mic.message}</p>}
        </div>

        <div className={classes.area}>
          <InputText
            id="ui"
            name="ui"
            control={control}
            label="UI in the raid encounter"
            placeholder="Enter link where we can see the screenshot (i.e. Gyazo etc.)"
            rules={{ required: "UI screenshot link is required" }}
          />
          {errors.ui && <p className={classes.error}>{errors.ui.message}</p>}
        </div>

        <div className={classes.area}>
          <InputRadio
            id="attendance"
            label="We raid on Monday and Wednesday, 20:00-23:00 CEST. Are you sure you can commit to this schedule?"
            options={["Yes", "No"]}
            control={control}
            name="attendance"
            rules={{ required: "Attendance confirmation is required" }}
          />
          {errors.attendance && (
            <p className={classes.error}>{errors.attendance.message}</p>
          )}
        </div>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
          onChange={onChange}
        />

        <div className={classes.submitarea}>
          <button
            className={isPending ? classes.submited : classes.submitbtn}
            type="submit"
            title="Submit"
            disabled={!isCaptchaVerified}
          >
            {isPending ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </main>
  );
}
