function getUserDetails(userId,callback){
    console.log("getting userId",userId);
    getUserSubject({userRoll:"1231"})

};
function getUserSubject(userRoll,callback){
    console.log("getting userRoll",userRoll);
    getuserMarks({subId:"en-1"})

};
function getuserMarks(subId){
    console.log("getting subjectId",subId);
};

getUserDetails("123",function(userRoll){
    getUserSubject(userRoll,function(subId){
        getuserMarks(subId)
    })
});