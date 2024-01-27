export interface Report {
  id: number;
  groupName: string;
  uiHandle: string;
  iconUrl: string;
  reports:[
    {
      id: number,
      displayName: string,
      description: string,
      uiHandle: string,
      serviceUrl: string,
      ordering: number,
      groupId: number
      pinned: boolean
    },
    {
      id: number,
      displayName: string,
      description: string,
      uiHandle: string,
      serviceUrl: string,
      ordering: number,
      groupId: number,
      pinned: boolean
    }
  ]
}
