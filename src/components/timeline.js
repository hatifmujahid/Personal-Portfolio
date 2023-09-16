
export default function Timeline() {
    const jobs = [
        {
            name: 'Software Lab Instructor',
            date: 'July 2023-August 2023',
            description: '',
            logo: ''
        }
    ]
    
    return (

        <div className={`flex items-center justify-center mt-7 ml-28`}>            
            <ol class="relative border-l border-gray-200 dark:border-gray-700"> 
                <li class="mb-10 ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
                    </svg>
                    </span>
                    <h3 class="flex ml-2 items-center mb-1 text-lg font-semibold text-gray-200 dark:text-white">Head Web Development<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
                    <time class=" ml-2 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">ACM FAST Karachi Chapter | September 2023-May 2024</time>
                    <p class="mb-4 ml-2 text-base font-normal text-gray-500 dark:text-gray-400 w-3/4">
                        <li class="space-y-1 text-gray-500 list-disc list-inside ">
                        Worked in Cloud App Development and Maintenance department, with a team working on Human Resource Managment Portal named SYSHCM. 
                        </li>
                        <li class="space-y-1 text-gray-500 list-disc list-inside ">
                        Cleaned data using python, produced SQL scripts to be deployed on live production
                        </li>
                    </p>
                </li>                 
                <li class="mb-10 ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
                    </svg>
                    </span>
                    <h3 class="flex ml-2 items-center mb-1 text-lg font-semibold text-gray-200 dark:text-white">Software Lab Instructor<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
                    <time class="block ml-2 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Data Structure | FAST NUCES | July 2023-August 2023</time>
                    <p class="mb-4 text-base ml-2 font-normal text-gray-500 dark:text-gray-400 w-3/4">
                        <li class="space-y-1 text-gray-500 list-disc list-inside ">
                        Worked in Cloud App Development and Maintenance department, with a team working on Human Resource Managment Portal named SYSHCM. 
                        </li>
                        <li class="space-y-1 text-gray-500 list-disc list-inside ">
                        Cleaned data using python, produced SQL scripts to be deployed on live production
                        </li>
                    </p>
                </li>
                <li class="mb-10 ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                        <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                    </svg>
                    </span>
                    <h3 class="mb-1 ml-2 text-lg font-semibold text-white dark:text-white">Systems Limited</h3>
                    <time class="ml-2 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Software Engineer | July 2023-August 2023</time>
                    <p class="text-base ml-2 font-normal text-gray-500 dark:text-gray-400 w-3/4">
                    <li class="space-y-1 text-gray-500 list-disc list-inside ">
                        Worked in Cloud App Development and Maintenance department, with a team working on Human Resource Managment Portal named SYSHCM. 
                        </li>
                        <li class="space-y-1 text-gray-500 list-disc list-inside ">
                        Cleaned data using python, produced SQL scripts to be deployed on live production
                        </li>
                    </p>
                </li>
                <li class="ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 ml-2 text-lg  font-semibold text-gray-200 dark:text-white">Teacher Assistant</h3>
                    <time class="block mb-2 ml-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Object Oriented Programming | FAST NUCES | Feb 2022 - Jun 2022</time>
                    <p class="text-base font-normal text-gray-500 ml-2 dark:text-gray-400"></p>
                </li>
            </ol>
        </div>
    );
}
