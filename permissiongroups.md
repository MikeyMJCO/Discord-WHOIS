# Discord WHOIS | Permission Groups
## What are permission groups?
Discord WHOIS relies on an underlining set of **permission groups**. A **permission group** is like a rank, it defines what each person can do.

## What permission groups are there?
Great question! Here is the list of permission groups from most permitted to least.
- Owner
- Admin
- Maintainer
- Support
- Trusted User
- User
- Banned

## What permissions does each have?
Here is the list:
### Owner
Owners are the top-tier of user. They are the primary developer. They can do ANYTHING.

### Admin
Admins are advanced maintainers. Their job is to assist users with data extraction.
- View raw user data
- All of [Maintainer](#maintainer)

### Maintainer
Maintainers manage the database. Their job is to back up and supervise the bot.
- Backup
- Opt users out
- All of [Support](#support)

### Support
Support is pretty low level. They can do the following:
- View support tickets
- Get Maintainers or above user data
- Set [Trusted User](#trusted-user) ranks
- All of [Trusted User](#trusted-user)

### Trusted User
Trusted Users are basically members that have used the bot a lot. They can do the following:
- Request data removal for another person
- Request someone else's raw data
- Submit a new user
- All of [User](#user)

### User
Users are normal bot members. They can use the following:
- Help command
- Request data extraction
- Request data removal
- Opt Out

### Banned
Banned members are **unable to use the bot**. They will still be recorded by the bot, but cannot run commands.