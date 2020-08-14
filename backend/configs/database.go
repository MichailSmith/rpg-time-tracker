package configs

import (
	"github.com/jinzhu/gorm"
	_ "github.com/mattn/go-sqlite3"

	"github.com/michailsmith/rpg-time-tracker/graph/model"
)

// DB is the database instance
var DB *gorm.DB

// InitDatabase init and return the database instance
func InitDatabase() (err error) {
	DB, err = gorm.Open("sqlite3", "./db.sqlite")
	if err != nil {
		return
	}

	DB.LogMode(true)
	// Migrate the schema
	DB.AutoMigrate(&model.User{})
	DB.AutoMigrate(&model.Time{})
	DB.AutoMigrate(&model.PageInfo{})

	// Create
	DB.Create(&model.User{ID: "1", Username: "Mortlock", Password: "thirstwellsux", Email: "mvam@gmail.com", IsGm: true})
	DB.Create(&model.User{ID: "2", Username: "Raya", Password: "tyrislord", Email: "raya@hellriders.com", IsGm: true})
	DB.Create(&model.Time{ID: "1", UserID: "1", CampaignName: "Descent into Avernus", ElapsedTime: 0})
	DB.Create(&model.Time{ID: "2", UserID: "2", CampaignName: "The Temple of Elemental Evil ", ElapsedTime: 500})

	return
}
