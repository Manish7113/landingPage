'use client'

import Feature from "@/@core/component/feature";
import Navbar from "@/@core/component/navbar";
import Service from "@/@core/component/service";
import Speciality from "@/@core/component/speciality";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Service></Service>
    <Feature></Feature>
    <Speciality></Speciality>
    </>
    
  );
}
