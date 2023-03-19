export  interface IcompanyName {
    id: string;
    company : string
  }
  export  interface IcompanyNamestate {
    companyName : IcompanyName[]
    loading?:boolean
    error?:string
  }

