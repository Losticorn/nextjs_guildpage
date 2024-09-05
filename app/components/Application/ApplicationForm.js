"use client";

import { useForm } from "react-hook-form";
import { useState, useMemo } from "react";
import { heroClasses } from "../../data/ApplicationData";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import InputText from "../../components/InputText";
import InputRadio from "../../components/InputRadio";
import InputSelect from "../../components/InputSelect";
import { useRouter } from "next/navigation";
import Area from "../Area";

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
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function ApplicationForm() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const router = useRouter();

  const {
    setValue,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const role = watch("role");

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
    router.push("/");
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
    <main className="flex flex-col justify-center items-center m-auto max-w-[1500px]">
      <h1 className="text-6xl py-4 text-white my-6 ">Application Form</h1>
      <form
        className="flex flex-col items-center rounded-3xl mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Area>
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
        </Area>
        <Area>
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
        </Area>

        <Area>
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
        </Area>

        <Area>
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
        </Area>

        <Area>
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
        </Area>

        <Area>
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
        </Area>

        <Area>
          <InputRadio
            id="mic"
            label="Do you have a working microphone?"
            options={["Yes", "No"]}
            control={control}
            name="mic"
            rules={{ required: "Microphone status is required" }}
          />
          {errors.mic && <p className={classes.error}>{errors.mic.message}</p>}
        </Area>

        <Area>
          <InputText
            id="ui"
            name="ui"
            control={control}
            label="UI in the raid encounter. You can use online tools (i.e. Gyazo etc.)"
            placeholder="Enter link"
            rules={{ required: "UI screenshot link is required" }}
          />
          {errors.ui && <p className={classes.error}>{errors.ui.message}</p>}
        </Area>

        <Area>
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
        </Area>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
          onChange={onChange}
        />

        <div className="flex flex-col items-center p-4 m-2 text-white rounded-3xl">
          <button
            className={
              isPending
                ? "bg-lime-400 text-black px-12 py-2 border-[1px] border-black rounded-3xl text-xl w-full"
                : "bg-transparent text-white px-12 py-2 border-[1px] border-white rounded-3xl text-xl w-full hover-bg-white hover-bg-black hover-pointer"
            }
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
