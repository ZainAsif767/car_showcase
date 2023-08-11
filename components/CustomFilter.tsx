"use client";
// for server side rendering with page.tsx

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  // State for storing the selected option
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  // update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className="relative w-fit z-10">
          {/* Button for the listbox */}
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({
                    active,
                  }) => `relative cursor-default select-none py-2 px-4 ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  }
                  }`}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;

//
// "use client";
// // for client side rendering

// import { Fragment, useState } from "react";
// import Image from "next/image";
// import { Listbox, Transition } from "@headlessui/react";
// import { CustomFilterProps } from "@/types";

// const CustomFilter = ({ options, setFilter }: CustomFilterProps) => {
//   // State for storing the selected option
//   const [selected, setSelected] = useState(options[0]);

//   return (
//     <div className="w-fit">
//       <Listbox
//         value={selected}
//         onChange={(e) => {
//           setSelected(e); // Update the selected option in state
//           setFilter(e.value); // Update the URL search parameters and navigate to the new URL
//         }}
//       >
//         <div className="relative w-fit z-10">
//           {/* Button for the listbox */}
//           <Listbox.Button className="custom-filter__btn">
//             <span className="block truncate">{selected.title}</span>
//             <Image
//               src="/chevron-up-down.svg"
//               alt="chevron up down"
//               width={20}
//               height={20}
//               className="ml-4 object-contain"
//             />
//           </Listbox.Button>
//           {/* Transition for displaying the options */}
//           <Transition
//             as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="custom-filter__options">
//               {/* Map over the options and display them as listbox options */}
//               {options.map((option) => (
//                 <Listbox.Option
//                   key={option.title}
//                   value={option}
//                   className={({
//                     active,
//                   }) => `relative cursor-default select-none py-2 px-4 ${
//                     active ? "bg-primary-blue text-white" : "text-gray-900"
//                   }
//                   }`}
//                 >
//                   {({ selected }) => (
//                     <span
//                       className={`block truncate ${
//                         selected ? "font-medium" : "font-normal"
//                       }`}
//                     >
//                       {option.title}
//                     </span>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//     </div>
//   );
// };

// export default CustomFilter;
