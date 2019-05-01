public class NewCaseListController {
    
    public List<Case> getNewCases(){
        return [SELECT ID,CaseNumber FROM CASE WHERE status =: 'NEW'];
    }
}