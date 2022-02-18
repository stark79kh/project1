$(document).ready(function () {
    "use strict";
    /*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
    var gCoursesDB = {
      description: "This DB includes all courses in system",
      courses: [
        {
          id: 1,
          courseCode: "FE_WEB_ANGULAR_101",
          courseName: "How to easily create a website with Angular",
          price: 750,
          discountPrice: 600,
          duration: "3h 56m",
          level: "Beginner",
          coverImage: "images/courses/course-angular.jpg",
          teacherName: "Morris Mccoy",
          teacherPhoto: "images/teacher/morris_mccoy.jpg",
          isPopular: false,
          isTrending: true,
        },
        {
          id: 2,
          courseCode: "BE_WEB_PYTHON_301",
          courseName: "The Python Course: build web application",
          price: 1050,
          discountPrice: 900,
          duration: "4h 30m",
          level: "Advanced",
          coverImage: "images/courses/course-python.jpg",
          teacherName: "Claire Robertson",
          teacherPhoto: "images/teacher/claire_robertson.jpg",
          isPopular: false,
          isTrending: true,
        },
        {
          id: 5,
          courseCode: "FE_WEB_GRAPHQL_104",
          courseName: "GraphQL: introduction to graphQL for beginners",
          price: 850,
          discountPrice: 650,
          duration: "2h 15m",
          level: "Intermediate",
          coverImage: "images/courses/course-graphql.jpg",
          teacherName: "Ted Hawkins",
          teacherPhoto: "images/teacher/ted_hawkins.jpg",
          isPopular: true,
          isTrending: false,
        },
        {
          id: 6,
          courseCode: "FE_WEB_JS_210",
          courseName: "Getting Started with JavaScript",
          price: 550,
          discountPrice: 300,
          duration: "3h 34m",
          level: "Beginner",
          coverImage: "images/courses/course-javascript.jpg",
          teacherName: "Ted Hawkins",
          teacherPhoto: "images/teacher/ted_hawkins.jpg",
          isPopular: true,
          isTrending: true,
        },
        {
          id: 8,
          courseCode: "FE_WEB_CSS_111",
          courseName: "CSS: ultimate CSS course from beginner to advanced",
          price: 750,
          discountPrice: 600,
          duration: "3h 56m",
          level: "Beginner",
          coverImage: "images/courses/course-css.jpg",
          teacherName: "Juanita Bell",
          teacherPhoto: "images/teacher/juanita_bell.jpg",
          isPopular: true,
          isTrending: true,
        },
        {
          id: 14,
          courseCode: "FE_WEB_WORDPRESS_111",
          courseName: "Complete Wordpress themes & plugins",
          price: 1050,
          discountPrice: 900,
          duration: "4h 30m",
          level: "Advanced",
          coverImage: "images/courses/course-wordpress.jpg",
          teacherName: "Clevaio Simon",
          teacherPhoto: "images/teacher/clevaio_simon.jpg",
          isPopular: true,
          isTrending: false,
        },
      ],
      popularCourses: function (paramCourses) {
        var vPopularCourses = paramCourses.courses.filter(
          (bI) => bI.isPopular == true
        );
        return vPopularCourses;
      },
      trendingCourses: function (paramCourses) {
        var vTrendingCourses = paramCourses.courses.filter(
          (bI) => bI.isTrending == true
        );
        return vTrendingCourses;
      },
    };
  
    /*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
    console.log(gCoursesDB.popularCourses(gCoursesDB));
  
    onPageLoading();
  
    /*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
    function onPageLoading() {
      var vPopularCourses = gCoursesDB.popularCourses(gCoursesDB);
      var vTrendingCourses = gCoursesDB.trendingCourses(gCoursesDB);
      // ham lay ra popular course
      getPopularCourse(vPopularCourses);
      // ham lay ra trending course
      getTrendingCourse(vTrendingCourses);
    }
    /*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
  
    // khai bao ham xu ly popular course
    function getPopularCourse(paramArrayCourses) {
      paramArrayCourses.map((bI) => {
        var vTemplateCourse = `
          <div class="col mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src="${bI.coverImage}"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${bI.courseName}
                </h5>
                <p class="card-text">
                  <span class="course_content_icon">
                    <i class="far fa-clock"></i>
                  </span>
                  <span class="course_content_time">${bI.duration} </span>
                  <span class="course_content_level">${bI.level}</span>
                </p>
                <p class="card-text">
                  <strong class="course_content_sale_price"> ${bI.discountPrice} </strong>
                  <span class="course_content_regular_price"> ${bI.price}</span>
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <div class="col-10 pl-0">
                  <img
                    class="img-circle mr-3"
                    src="${bI.teacherPhoto}"
                    alt=""
                  />
                  <small class="text-muted">${bI.teacherName}</small>
                </div>
                <div
                  class="
                    col-2
                    pr-0
                    d-flex
                    align-items-center
                    justify-content-end
                  "
                >
                  <i class="far fa-bookmark"></i>
                </div>
              </div>
            </div>
          </div>`;
  
        //add to row
        $("#div-popular-courses").append(vTemplateCourse);
      });
    }
  
    // khai bao ham xu ly trending course
    function getTrendingCourse(paramArrayCourses) {
      paramArrayCourses.map((bI) => {
        var vTemplateCourse = `
          <div class="col mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src="${bI.coverImage}"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${bI.courseName}
                </h5>
                <p class="card-text">
                  <span class="course_content_icon">
                    <i class="far fa-clock"></i>
                  </span>
                  <span class="course_content_time">${bI.duration} </span>
                  <span class="course_content_level">${bI.level}</span>
                </p>
                <p class="card-text">
                  <strong class="course_content_sale_price"> ${bI.discountPrice} </strong>
                  <span class="course_content_regular_price"> ${bI.price}</span>
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <div class="col-10 pl-0">
                  <img
                    class="img-circle mr-3"
                    src="${bI.teacherPhoto}"
                    alt=""
                  />
                  <small class="text-muted">${bI.teacherName}</small>
                </div>
                <div
                  class="
                    col-2
                    pr-0
                    d-flex
                    align-items-center
                    justify-content-end
                  "
                >
                  <i class="far fa-bookmark"></i>
                </div>
              </div>
            </div>
          </div>`;
        // add to row
        $("#div-trending-courses").append(vTemplateCourse);
      });
    }
  });
  