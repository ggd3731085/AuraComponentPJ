//public with sharing class HelloWorldCmpCtrl {
 //対象サイト　取得
//    @AuraEnabled
//    public static List<account> getAccounts(String site){
//        system.debug(site);
//        return [select Id, Name, Industry from account];
//    }
//}
public with sharing class HelloWorldCmpCtrl {
    //対象サイト　取得
    @AuraEnabled
    public static List<account> getAccounts(String site){
        system.debug(site);
        List<account> accounts = [select Id, Name, Industry from account];
        system.debug(accounts);
        return accounts;
    }
    @AuraEnabled
    public static String getStr(String site){
        return 'getStr';
    }
}