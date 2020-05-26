import{Authority} from '../authority/authority';

export class Organization{

    orgaID : Number;
    orgaName :String;
    orgaAddress : String;
    password : Number;
    orgaEmail : String;
    orgaContactNumber : Number;
    enabled: number;
    authdata?: string;
    authName: Authority;
  
  
  }