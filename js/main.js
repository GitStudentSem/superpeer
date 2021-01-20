$(function () {
  // Красивое модальное окно
  const modal = $(".modal__open"),
    func = () => {
      swal({
        title: "Внимание!",
        text: "Этот сайт - учебный проект: некоторые функции отсутствуют",
        icon: "warning",
        button: "Хорошо!",
      });
    };
  modal.on("click", func);

  // Отключение телепортации наверх у ссылок
  $(".modal__open").click(function (e) {
    e.preventDefault();
  });
});
