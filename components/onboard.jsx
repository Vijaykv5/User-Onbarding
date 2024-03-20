
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs } from "@/components/ui/tabs"

export function onboard() {
  return (
    (<div className="h-screen flex flex-col">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-14">
          <div className="text-lg font-semibold">OPENMRS</div>
        </div>
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="flex w-60 border-r border-l-gray-200 overflow-auto flex-col">
          <div className="flex-1 p-4">
            <div className="flex flex-col gap-4">
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                href="#">
                <ActivityIcon className="h-5 w-5" />
                Patient Summary
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                href="#">
                <ActivityIcon className="h-5 w-5" />
                Visits
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                href="#">
                <ActivityIcon className="h-5 w-5" />
                Allergies
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                href="#">
                <ActivityIcon className="h-5 w-5" />
                Orders
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col w-[calc(100%-60px)]">
          <div className="border-b p-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                alt="User avatar"
                className="rounded-full"
                height={36}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "36/36",
                  objectFit: "cover",
                }}
                width={36} />
              <div className="flex flex-col">
                <div className="text-sm font-medium">Smith, John</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Male, 35 years</div>
              </div>
            </div>
            <Button size="sm">New Visit</Button>
          </div>
          <div className="flex-1 p-4 grid items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 items-start gap-1">
                <div className="text-sm text-gray-500 dark:text-gray-400">Identifier</div>
                <div className="text-sm">GAN00001</div>
              </div>
              <div className="grid grid-cols-2 items-start gap-1">
                <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                <div className="text-sm">Outpatient Clinic</div>
              </div>
              <div className="grid grid-cols-2 items-start gap-1">
                <div className="text-sm text-gray-500 dark:text-gray-400">Last Updated</div>
                <div className="text-sm">2 hours ago</div>
              </div>
            </div>
            <Tabs>
              <div className="flex gap-4 border-b-0">
                <div className="text-sm font-medium rounded-t-lg">Demographics</div>
                <div className="text-sm font-medium rounded-t-lg">Contact</div>
                <div className="text-sm font-medium rounded-t-lg">Additional Info</div>
              </div>
              <div className="mt-4">
                <div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="grid grid-cols-2 items-start gap-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Given Name</div>
                      <div className="text-sm">John</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Family Name</div>
                      <div className="text-sm">Smith</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Gender</div>
                      <div className="text-sm">Male</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Birthdate</div>
                      <div className="text-sm">1986-02-14 (35 years)</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="grid grid-cols-2 items-start gap-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Address</div>
                      <div className="text-sm">123 Care St, Accra</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                      <div className="text-sm">+233 54 123 4567</div>
                    </div>
                    <div className="grid grid-cols-2 items-start gap-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                      <div className="text-sm">john.smith@example.com</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="prose prose-sm max-w-none">
                    <p>
                      <strong>Insurance:</strong>
                      NHIS - Active{"\n"}
                    </p>
                    <p>
                      <strong>Preferred Language:</strong>
                      English{"\n"}
                    </p>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
        <div className="flex w-12 items-start border-l">
          <div className="flex-1 flex flex-col gap-4 p-4">
            <Button className="rounded-full p-3 -top-2" variant="ghost">
              <ActivityIcon className="w-6 h-6" />
            </Button>
            <Button className="rounded-full p-3" variant="ghost">
              <ActivityIcon className="w-6 h-6" />
            </Button>
            <Button className="rounded-full p-3" variant="ghost">
              <ActivityIcon className="w-6 h-6" />
            </Button>
            <Button className="rounded-full p-3" variant="ghost">
              <ActivityIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>)
  );
}


function ActivityIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>)
  );
}
