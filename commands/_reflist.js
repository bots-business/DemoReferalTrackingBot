/*CMD
  command: /reflist
  help: view my Referrals List
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Total users: " + refList.length + "\n----";
  for(i in refList){
    user = refList[i];
    msg+= "\n👤 `" +  user.first_name + " @" + user.username + "`";
  }
}else{
  msg = "No any affiliated users";
}
Bot.sendMessage(msg);


