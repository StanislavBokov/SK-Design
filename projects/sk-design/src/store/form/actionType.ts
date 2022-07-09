const SEND_DATA = 'SEND_DATA' as const ;
export interface Data {
  name: string,
  email: string,
  phone: string,
  profile: string,
  receiver?: string,
  selectValueCity:string,
  selectValue?: string
}

export default {
  SEND_DATA
};