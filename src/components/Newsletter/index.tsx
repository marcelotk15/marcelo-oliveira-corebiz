import React from "react";
import { useAppSelector } from "@/hooks/redux-typed-hooks";

import Form from "./Form";
import Sended from "./Sended";

export default function Newsletter() {
  const hasSended = useAppSelector((store) => store.newsletter.hasSended); 

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        {hasSended
          ? <Sended />
          : <Form />
        }
      </div>
    </section>
  );
}
