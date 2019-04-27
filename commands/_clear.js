/*CMD
  command: /clear
  help: clear Referal List
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(Libs.ReferralLib.currentUser.refList.clear()){
  Bot.sendMessage("Yours referral List cleared")
}
