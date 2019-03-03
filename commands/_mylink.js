/*CMD
  command: /mylink
  help: get my affiliate link
  need_reply: 
  auto_retry_time: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("DemoReferalTrackingBot");
Bot.sendMessage(parther_link);
