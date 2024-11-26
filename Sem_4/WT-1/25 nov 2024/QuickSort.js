let arr=[99,22,11]

QuickSort(arr,0,arr.length-1)
for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}



function QuickSort(arr,lb,ub){
    let flag=true

if(lb<ub){
    let i=lb
    let j=ub+1
    let key=arr[lb]

    while(flag==true){
        i++

        while(arr[i]<key){
            i++
        }
        j--
        while(arr[j]>key){
            j--
        }
        

        if(i<j){
            let temp=arr[i]
            arr[j]=arr[i]
            arr[i]=temp
        }
        else{
            flag=false
        }
    }

    let temp=arr[lb]
    arr[lb]=arr[j]
    arr[j]=temp
    QuickSort(arr,lb,j-1)
QuickSort(arr,j+1,ub)
}

}

