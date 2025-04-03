import { Tabs, TabsList, TabsTrigger } from "./navbar-tab";

export default function HeaderTabs() {
  return (
    <Tabs defaultValue="all" className="px-4">
      <TabsList className="h-10 flex overflow-x-auto no-scrollbar">
        <TabsTrigger
          value="all"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none min-w-max px-4 py-2"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          value="for-servicing"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none min-w-max px-4 py-2"
        >
          For Servicing
        </TabsTrigger>
        <TabsTrigger
          value="mbs"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none min-w-max px-4 py-2"
        >
          MBS
        </TabsTrigger>
        <TabsTrigger
          value="trid-responses"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none min-w-max px-4 py-2"
        >
          TRID Responses
        </TabsTrigger>
        <TabsTrigger
          value="spreads-possession"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none min-w-max px-4 py-2"
        >
          Spreads Possession
        </TabsTrigger>
        <TabsTrigger
          value="em-open"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none min-w-max px-4 py-2"
        >
          EM Open
        </TabsTrigger>
        <TabsTrigger
          value="physical-possessions"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none min-w-max px-4 py-2"
        >
          Physical Possessions
        </TabsTrigger>
        <TabsTrigger
          value="archive"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none min-w-max px-4 py-2"
        >
          Archive
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
