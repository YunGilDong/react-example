export function gridDataGenerator(row=10){
    let arr = new Array();
    for(let i = 0; i< row; i++)
    {
        arr.push(
            new Array({
                id: i,
                name: "gildong "+i,
                field1: "field1" +i,
                field2: "field2"+i,
                field3: "field3"+i,
                field4: "field4"+i,
                field5: "field5"+i,
                field6: "field6"+i,
                field7: "field7"+i,
                field8: "field8"+i,
                field9: "field9"+i,
                field10: "field10"+i
            })
        );
        console.log("arr : "+arr);
    }

    return (arr);
}