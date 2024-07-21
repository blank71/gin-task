package main

import (
	"time"
	controller "web/controller"
	model "web/model"

	"github.com/gin-gonic/gin"
)

func main() {
	u := model.User{
		UserId: 1,
		Name:   "hoge",
	}
	t := model.Task{
		ID:        1,
		UserId:    1,
		TaskName:  "taskname",
		CreateAt:  time.Now(),
		UpdateAt:  time.Now(),
		Time:      time.Second * 30,
		Parent:    0,
		TotalTime: time.Second * 20,
	}
	model.AddUser(u)
	model.AddTask(t)

	// init and load
	engine := gin.Default()
	engine.LoadHTMLGlob("view/html/*.html")
	engine.Static("/css", "view/css/")
	engine.Static("/js", "view/js/")

	engine.GET("/", func(ctx *gin.Context) {
		controller.ShowTimePage(ctx, u.UserId, t.ID)
	})
	engine.POST("/", func(ctx *gin.Context) {
		taskName := ctx.PostForm("TaskName")
		t.TaskName = taskName
		t.UpdateAt = time.Now()
		model.UpdateTask(t)
		controller.ShowTimePage(ctx, u.UserId, t.ID)
	})

	engine.Run(":8080")
}
