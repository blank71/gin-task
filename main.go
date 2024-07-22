package main

import (
	"fmt"
	"net/http"
	"strconv"
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
		Time:      time.Second * 0,
		Parent:    0,
		TotalTime: time.Second * 0,
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

	engine.POST("/taskname", func(ctx *gin.Context) {
		taskName := ctx.PostForm("TaskName")
		fmt.Println("/taskname:", taskName)
		t.TaskName = taskName
		model.UpdateTask(t)
		ctx.Redirect(http.StatusFound, "/")
		// controller.ShowTimePage(ctx, u.UserId, t.ID)
	})

	engine.POST("/post", func(ctx *gin.Context) {
		sumTime, _ := strconv.Atoi(ctx.PostForm("sumTime"))
		fmt.Println(ctx.PostForm("sumTime"))
		fmt.Println("post:", sumTime)
		t.TotalTime = (time.Second * time.Duration(sumTime))
		model.UpdateTask(t)
		ctx.Redirect(http.StatusFound, "/")
		// controller.ShowTimePage(ctx, u.UserId, t.ID)
	})

	engine.Run(":8080")
}
