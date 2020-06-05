





export function gridDataGenerator(row=10){
    //let jArray = new JSONArray();
    let arr = new Array();
    var obj = {id: "id" , name: "---"
        , field1: 30, field2: "--" 
        , field3: 30, field4: "--"
        , field5: 30, field6: "--"
        , field7: 30, field8: "--"
        , field9: 30, field10: "--"};
      
    for(let i = 0; i< row; i++)
    {
        arr.push(obj);
    }

    //console.log(arr);
    return (arr);
}