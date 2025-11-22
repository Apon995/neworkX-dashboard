
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logos/logo-1.png";
import EmployeIcon from "@/app/assets/auth/employee.svg";
import TrainerIcon from "@/app/assets/auth/trainer.svg";
import Rightside from "./components/auth/Rightside";
import LogoOne from "./components/logos/LogoOne";

export default function Home() {

  const roles = [
    {
      title: 'Employer',
      description: 'I am looking to hire job seekers and post job openings.',
      icon: EmployeIcon ,
      href: '/employe',

    },
    {
      title: 'Trainer',
      description: 'I am looking to offer training programs and share various opportunities.',
      icon: TrainerIcon,
      href: '/trainer',

    },
    {
      title: 'Agency',
      description: 'Create your official agency account to manage cases and reports.',
      icon: TrainerIcon ,
      href: '/agency',

    },
  ];

  return (
    <div className="min-h-screen flex bg-auth-bg px-4 lg:px-0">
      {/* Left Section */}

      <div className="space-y-12 flex-1 py-5 my-auto">
        <div className="mt-5">
          <LogoOne className="mx-auto"/>
        </div>

        <div className="space-y-4 mx-auto">
          {roles.map((role) => (
            <div
              key={role.title}
              className="block group"
            >
              <div className="bg-transparent max-w-xl mx-auto rounded-2xl shadow p-6 border border-black transition-all duration-300 ">
                <div className="flex md:items-start items-center md:flex-row flex-col gap-4">
                  <div className={`p-3  text-black `}>
                      <Image src={role.icon} alt={role.title} width={40} height={40}/>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-1">
                      {role.title}
                    </h3>
                    <p className="text-sm text-black font-normal  leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
                <div className="mt-5 w-full" >
                  <Link href={role.href}
                    className={` block text-center py-3 px-6 text-white font-medium rounded-xl bg-btn-bg hover:opacity-95`}
                  >
                    Proceed
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Right Section */}
     <Rightside/>
    </div>
  );
}

