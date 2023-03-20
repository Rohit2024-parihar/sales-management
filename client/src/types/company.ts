export  interface IcompanyName {
    id?: string;
    companyName : string
  }
  export  interface IcompanyNamestate {
    companyName : IcompanyName[]
    loading?:boolean
    error?:string
  }

