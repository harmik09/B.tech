let arr=[25,22,1]

 
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                }
            }
        }

        for(let i=0;i<=arr.length-1;i++){
            console.log(arr[i])
        }