<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

define('DOING_AJAX', true);

/** Load WordPress Bootstrap */
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/wp-load.php');

// Require an action parameter
if (empty($_POST['action'])) {
    die('0');
}

@header('Content-Type: application/json');
@header('X-Robots-Tag: noindex');

send_nosniff_header();
nocache_headers();

if ($_POST['action'] == 'make_order') {

    $damage = "    Нет\n";
    if (!empty($_POST['povrejdeniya'])) {
        $damage = '';
        foreach ($_POST['povrejdeniya'] as $type) {
            $damage .= "    - $type\n";
        }
    }

    $brand = empty($_POST['brand']) ? 'Не указано' : $_POST['brand'];
    $model = empty($_POST['model']) ? 'Не указано' : $_POST['model'];
    $year = empty($_POST['year']) ? 'Не указано' : $_POST['year'];
    $korobka = empty($_POST['korobka']) ? 'Не указано' : $_POST['korobka'];
    $probeg = empty($_POST['probeg']) ? 'Не указано' : $_POST['probeg'];
    $phone = empty($_POST['phone']) ? 'Не указано' : $_POST['phone'];

    $mailMessage = <<<ORDER
Сделан заказ расчета автомобиля.

Марка автомобиля: $brand
Модель автомобиля: $model
Год выпуска по ПТС: $year
Коробка передач: $korobka
Пробег: $probeg
Значительные повреждения по кузову автомобиля:
$damage
Телефон: $phone

ORDER;

    $option = get_option('plugin_options_car_calc');
    $to = $option['email'];

    if (mail($to, 'Заказан расчет автомобиля', $mailMessage)) {
        $res = ['status' => 'success', 'msg' => 'Заказ успешно создан'];
    } else {
        $res = ['status' => 'error', 'msg' => 'Ошибка создания заказа. Попробуйте пожалуйста позже.'];
    }

    die(json_encode($res));

} else {
    die(json_encode('0'));
}
