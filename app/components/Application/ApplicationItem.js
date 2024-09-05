"use client";
import Link from "next/link";
import Button from "../Header/Buttons";
import { deleteApplication } from "../../../action/user";
import Area from "../Area";

export default function ApplicationItem(props) {
  return (
    <li className="bg-[#0f0f0f] w-full max-w-[450px] m-0 p-0 rounded-xl">
      <h1 className="text-center p-0 m-0 text-[#c7c7c7]">{props.name}</h1>
      <div className="flex flex-col items-center m-2 rounded-xl">
        <Area>
          <p className="text-lg">Discord</p>
          <p className="p-0 bg-black m-0 text-[#c7c7c7]">{props.discord}</p>
        </Area>
        <Area>
          <p className="text-lg">Interest</p>
          <p className="p-0 bg-black m-0 text-[#c7c7c7]">{props.raidtype}</p>
        </Area>
        <Area>
          <p className="text-lg">Role</p>
          <p className="p-0 bg-black m-0 text-[#c7c7c7]">{props.role}</p>
        </Area>
        <Area>
          <p className="text-lg">Main</p>
          <p className="p-0 bg-black m-0 text-[#c7c7c7]">{props.main}</p>
        </Area>
        <Area>
          <p className="text-lg">Logs</p>
          <Link href={props.logs} target="_blank">
            <p className="p-0 bg-black m-0 text-[#c7c7c7]">{props.logs}</p>
          </Link>
        </Area>
        <Area>
          <p className="text-lg">Do you have working microphone?</p>
          <p className="p-0 bg-black m-0 text-[#c7c7c7]">{props.mic}</p>
        </Area>
        <Area>
          <p className="text-lg">UI in combat</p>
          <Link href={props.ui} target="_blank">
            <p className="p-0 bg-black m-0 text-[#c7c7c7]">{props.ui}</p>
          </Link>
        </Area>
        <Area>
          <p className="text-lg">Can commit to our schedule?</p>
          <p className="p-0 bg-black m-0 text-[#c7c7c7]">{props.attendance}</p>
        </Area>
      </div>
      <div className="flex flex-row justify-evenly w-full mx-2 my-0">
        <Button title="Accept" />
        <Button
          title="Delete"
          onClick={() => {
            deleteApplication(props.id);
          }}
        />
      </div>
    </li>
  );
}
