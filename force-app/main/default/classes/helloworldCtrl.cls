public class helloworldCtrl {
    public String varStr{get;set;}
    
    public List<account> accounts {get;set;}
    
    public HelloWorldCtrl (){
        varStr = '農業';
        accounts= [select id,name,Industry from account];
    }
    public void actionGet(){
        system.debug(varStr);
        accounts= [select id,name,Industry from account];
    }
    public void changeName(){
        system.debug('changeName:' + varStr);
    }
    public void actionChangePhone(){
        system.debug(varStr);
    }
}