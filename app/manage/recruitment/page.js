import InputSelect from "../../components/InputSelect";
import { heroClasses } from "../../data/ApplicationData";
import { useMemo } from "react";

export default function UpdateRecruitment() {
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
  return (
    <main>
      <InputSelect />
    </main>
  );
}
