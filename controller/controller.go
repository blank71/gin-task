package controller

import (
	"net/http"

	model "web/model"

	"github.com/gin-gonic/gin"
)

func ShowTimePage(c *gin.Context, user_id int, time_id int) {
	u := model.GetUser(user_id)
	t := model.GetTask(time_id)
	c.HTML(http.StatusOK, "time.html", gin.H{
		"user": u,
		"task": t,
	})
}

func PostUser(c *gin.Context) {

}
