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

--------CONTROL ACCESS TO THE ORG-------------
  - Manage Users
  Every Salesforce user is identified by a username, a password, and a single profile. Together with other settings, the profile determines what tasks users can perform, what data they see, and what they can do with the data

  - Create a User
  You can create users—even multiple users—in just a few clicks. It’s as simple as entering a username, alias, and email, and selecting a role, license, and profile.

  activities
  - Create a User
  - Deactivate a User
  - Set Password Policy
  - Specify Trusted IP Ranges for the Org
  - Restrict Login Access by IP Address Using Profiles
  - Restrict Login Access by Time

  --------CONTROL ACCESS TO OBJECTS----------------
  --------MANAGE OBJECT PERMISSIONS----------
  The simplest way to control data access is to set permissions on a particular type of object
  - A user’s profile determines the objects they can access and the things they can do with any object record (such as create, read, edit, or delete).
  - Permission sets grant additional permissions and access settings to a user.

  --------Use Profiles to Restrict Access---



    






*/