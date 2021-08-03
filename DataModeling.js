/* 
database tables as objects, 
columns as fields
rows as records

object relations
connects two objects together.

Lookup Relationships
essentially links two objects together so that you can “look up” one object from the related items on another object. can be one-to-one or one-to-many

Master-Detail Relationships
one object is the master and another is the detail.The master object controls certain behaviors of the detail object, like who can view the detail’s data. one to many if you detele the master the details will desapear too.

Difference between loopup and master
look up could be composition
master could be inheritance
thinking about in POO

Hierarchical relationships
It is a special type of lookup relationship, creating management chains between users

-------SCHEMA BUILDER--------------------
Schema Builder is a tool that lets you visualize and edit your data model.It’s useful for designing and understanding complex data models
Schema Builder is a handy tool for introducing your Salesforce customizations to a co-worker or explaining the way data flows throughout your system.

types of objects. 
standard objects, custom objects, external objects, platform events, and BigObjects.

field types
Identity	
A 15-character, case-sensitive field that’s automatically generated for every record. You can find a record’s ID in its URL.

System	
Read-only fields that provide information about a record from the system, like when the record was created or when it was last changed

Name	
All records need names so you can distinguish between them. You can use text names or auto-numbered names that automatically increment every time you create a record.

Custom	Fields you create on standard or custom objects are called custom fields.

data-types
Checkbox
for fields that are a simple “yes” or “no,” a checkbox field is what you want.

Date or DateTime
these field types represent dates or date/time combinations, like birthdays or sales milestones.

Formula
this special field type holds a value that’s automatically calculated based on a formula that you write

-------Best practicces---------------
- Be thoughtful about names
- Help out your users.
- Require fields when necessary


-------------------CREATE OBJECT RELATIONSSHIPS------


*/