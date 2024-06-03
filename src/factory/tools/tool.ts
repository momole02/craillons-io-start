

export default class Tool {
  id: string = "";
  label: string = "";
  constructor(data?: Tool) {
    if(data){
      this.id= data.id;
      this.label = data.label;
    }
  }
}