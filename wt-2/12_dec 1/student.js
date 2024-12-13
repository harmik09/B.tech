const fs= require('fs');

const data=fs.readFileSync('student.txt','utf-8')

const lineArr=data.split('\n');
for(const i in lineArr){
    const wordArr=lineArr[i].split(',');
    console.log('{\nstudentId:',wordArr[0],'\nStudentName:',wordArr[1],'\nStudentMno',wordArr[2],'\nStudentEnrollmentNo:',wordArr[3],'\nStudentBranch:',wordArr[4],'\nStudentSPI:',wordArr[5],'\n}');

    if(int(wordArr[5])<5){
        console.log(wordArr[1])
    }
        
}
