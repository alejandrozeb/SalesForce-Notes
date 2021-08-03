/* 
  -----------------data security------------------
  With the Salesforce platform’s flexible, layered sharing model, it’s easy to assign different data sets to different sets of users. You can balance security and convenience, reduce the risk of stolen or misused data
  
  - Organization
  For your whole org, you can maintain a list of authorized users, set password policies, and limit logins to certain hours and locations.

  - Objects
  Access to object-level data is the simplest thing to control. By setting permissions on a particular type of object, you can prevent a group of users from creating, viewing, editing, or deleting any records of that object

  - Fields
  You can restrict access to certain fields, even if a user has access to the object

  - Records
  You can allow particular users to view an object, but then restrict the individual object records they're allowed to see.
    - Organization-wide defaults: specify the default level of access users have to each others’ records
    - Role hierarchies: give access for users higher in the hierarchy to all records owned by users below them in the hierarchy.
    - Sharing rules:are automatic exceptions to organization-wide defaults for particular groups of users, so they can get to records they don’t own or can’t normally see
    - Manual Sharing: allows owners of particular records to share them with other users.

- Audit System Use

    record Modification Fields
    login history
    field History tracking
    setup audit trail

    
    






*/