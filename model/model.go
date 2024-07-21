package model

import (
	"log"
	"time"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

const DBName = "test.sqlite3"

type User struct {
	UserId int `gorm:"primaryKey"`
	Name   string
}

type Task struct {
	ID        int `gorm:"primaryKey"`
	UserId    int
	TaskName  string
	CreateAt  time.Time
	UpdateAt  time.Time
	Time      time.Duration
	Parent    int
	TotalTime time.Duration
}

func checkError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func openDB() (db *gorm.DB) {
	db, err := gorm.Open(sqlite.Open(DBName), &gorm.Config{})
	db.AutoMigrate(&User{}, &Task{})
	checkError(err)
	return db
}

func AddUser(u User) {
	db := openDB()
	// db.Create(&u)
	db.Save(&u)
}

func GetUser(id int) (user User) {
	db := openDB()
	r := db.First(&user, id)
	checkError(r.Error)
	return
}

func AddTask(t Task) {
	db := openDB()
	db.Save(&t)
}

func UpdateTask(t Task) {
	db := openDB()
	db.Save(&t)
}

func GetTask(id int) (t Task) {
	db := openDB()
	r := db.First(&t, id)
	checkError(r.Error)
	return
}
