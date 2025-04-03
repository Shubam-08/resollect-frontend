import { Tabs, TabsList, TabsTrigger } from "./navbar-tab"

export default function HeaderTabs() {
  return(
<Tabs defaultValue="all" className="px-4">
<TabsList className="h-10">
  <TabsTrigger
    value="all"
    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none"
  >
    All
  </TabsTrigger>
  <TabsTrigger
    value="for-servicing"
    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none"
  >
    For Servicing
  </TabsTrigger>
  <TabsTrigger
    value="mbs"
    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none"
  >
    MBS
  </TabsTrigger>
  <TabsTrigger
    value="trid-responses"
    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none"
  >
    TRID Responses
  </TabsTrigger>
  <TabsTrigger
    value="spreads-possession"
    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none"
  >
    Spreads Possession
  </TabsTrigger>
  <TabsTrigger
    value="em-open"
    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none"
  >
    EM Open
  </TabsTrigger>
  <TabsTrigger
    value="physical-possessions"
    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none"
  >
    Physical Possessions
  </TabsTrigger>
  <TabsTrigger
    value="archive"
    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none"
  >
    Archive
  </TabsTrigger>
</TabsList>
</Tabs>
)
};