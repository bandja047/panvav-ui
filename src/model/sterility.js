export const sterilitydata = {
    names: "sterility",
    testconducted: [
        {
            names: "bacteria",
            methodused: {
                names: "culture on BA/TSA",
                resultobtained: {
                    selectedId:1,
                    options:[
                        {
                            id:1,
                            names:"Growth Obtained"
                        },
                        {
                            id:2,
                            names:"No Growth Obtained"
                        },
                        {
                            id:3,
                            names:"Pure colonieis obtained"
                        },
                        {
                            id:4,
                            names:"Contaminated colonies obtained"
                        },
                        {
                            id:5,
                            names:"Leave open for number of colonies"
                        },
                        {
                            id:6,
                            names:"Not Done"
                        }
                    ]
                }
                   ,
                referenceValue:{
                    selectedId:1,
                    options:[
                        {
                            id:1,
                            names:"Asence of growth"
                        },
                        {
                            id:2,
                            names:"Presence of pure colonies"
                        },
                        {
                            id:3,
                            names:"<1 colonie / dose"
                        }
                    ]
                },
                interpretation: ""
            },

        },
        
        {
            names: "Bacteri/Fungi",
         
            methodused:[ {
                names: "culture on FTG/TSB",
                resultobtained: [{
                  
                }],
                referenceValue:"",
                interpretation: ""
            }],
        },

        {
            names: "Mycoplasma contamination",
         
            methodused: [{
                names: "Culture on FTG/TSB",
                resultobtained: "",
                referenceValue:"",
                interpretation: ""
            }],
        },

        {
            names: "Bacteri/Fungi",
         
            methodused:[{
                names: "culture on FTG/TSB",
                resultobtained: "",
                referenceValue:"",
                interpretation: ""
            }],
        },

        {
            names: "Bacteri/Fungi",
         
            methodused:[{
                names: "culture on FTG/TSB",
                resultobtained: "",
                referenceValue:"",
                interpretation: ""
            }],
        }

        ,]
}