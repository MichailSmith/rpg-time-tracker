# RPG Time Tracker

The goal of this project is to create a web application that will keep track of time for Dungeons and Dragons campaigns so that players and game masters will have a singular place they can observe to see what time it is / how much time has elapsed in their fantasy world.
Currently, the frontend is only able to update the first time record stored in the sqlite database, but we are working on implementing user authentication.

## Todos:
- [x] Display current elapsed in-game time to user
- [x] Allow user to increment time by 6 seconds, 10 minutes, or 1 hour
- [x] Allow user to reset time to 0
- [ ] Add authorization for GM view for a given campaign
- [ ] Add a read-only view for players
- [ ] Add support for multiple campaigns
- [ ] Allow user to reset time to a specific point
- [ ] Support for other planes
- [ ] Add support for advancing by 4 hours, 8 hours, 1 day, 1 week, 1 month, etc
- [ ] Add ability to set notes at a given point in time
- [ ] Integrate with roll20

## Libraries in use:
* gqlgen
* gorm

