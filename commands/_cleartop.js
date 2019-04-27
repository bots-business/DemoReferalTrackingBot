/*CMD
  command: /cleartop
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(Libs.ReferralLib.topList.clear()){
  Bot.sendMessage("Top List cleared")
}
