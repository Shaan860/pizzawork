export class Pizza{
    //short hand property decelarition 
    constructor(
        private customername: string, 
        private numberofitems: number,
        private totalamount: number,
        private itemname:string,
        private itemprice: number,
        private customeraddress:string,
        private status:string
        ){}
}