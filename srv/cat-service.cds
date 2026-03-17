using { todotask as db } from '../db/schema';

service TodotaskHandler {
    entity todotask as projection on db.Tasks actions{
        action completeTask(status:String(260));
        action deleteTask(ID:UUID);  
    };

    action create(title:String(260),
                   status:String(100)) returns todotask;


}