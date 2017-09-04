<?php
/**
 * Plugin Name: Калькулятор цен автомобилей
 * Description: Отправляет заявку на расчет цен на автомобили.
 * Version: 1.0
 */

add_action('admin_menu', 'plugin_admin_add_car_calc_page');
function plugin_admin_add_car_calc_page()
{
    add_options_page('Настройки калькулятора автомобилей', 'Калькулятор автомобилей', 'manage_options', 'car_calculator', 'plugin_options_page');
}

function plugin_options_page()
{
    ?>
    <div class="wrap">
        <h2>Расчет цены автомобилей</h2>

        <form action="options.php" method="post">
            <?php settings_fields('plugin_options_car_calc'); ?>
            <?php do_settings_sections('car_calculator'); ?>

            <input name="Submit" type="submit" value="<?php esc_attr_e('Сохранить изменения'); ?>"/>
        </form>
    </div>

    <?php
}

$defaultCarCalcOptions = [
    'email' => 'seo-alabis@yandex.ru',
];


//delete_option('plugin_options_car_calc');

// add the admin settings and such
add_action('admin_init', 'plugin_admin_init');
function plugin_admin_init()
{
    register_setting('plugin_options_car_calc', 'plugin_options_car_calc', 'plugin_options_validate_car_calc');
    add_settings_section('plugin_main_car_calc', 'Настройки', 'plugin_section_text_car_calc', 'car_calculator');
    add_settings_field('plugin_calc_car', 'Email', 'plugin_calc_car_func', 'car_calculator', 'plugin_main_car_calc');
    wp_enqueue_script('jquery');
    wp_enqueue_media();
}

function plugin_section_text_car_calc()
{
    //echo '<p>Main description of this section here.</p>';
}

function plugin_calc_car_func()
{
    $options = get_option('plugin_options_car_calc', $GLOBALS['defaultCarCalcOptions']);
    $s = '<input type="email" value="' . esc_html($options['email']) . '" style="width:100%" name="plugin_options_car_calc[email]">';
    echo $s;
}


$pUrl = plugins_url('', __FILE__);

wp_register_style('car_calc_style', $pUrl . '/template.css');
//wp_register_style('wnd_calc_bpopup', $pUrl . '/bpopup.css');

//wp_register_script('jquery-effects-core');    // wrong params
wp_register_script('car_calc_script', $pUrl . '/template.js', ['jquery']);
//wp_register_script('wnd_calc_order_popup_script', $pUrl . '/jquery.bpopup.min.js', ['jquery']);

wp_register_script('popper-js', $pUrl . '/js/popper.min.js');
wp_register_script('bootstrap-js', $pUrl . '/js/bootstrap.min.js');
wp_register_style('bootstrap-css', $pUrl . '/css/bootstrap.min.css');
//wp_register_script('maskedinput-js', $pUrl . '/js/jquery.maskedinput.min.js');

wp_register_style('sweetalert2-css', 'https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.10/sweetalert2.css');
wp_register_script('sweetalert2-js', 'https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.10/sweetalert2.js');

wp_register_script('polyfill_ES6', 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js');

wp_register_script('maskedinput-js', $pUrl . '/js/jquery.maskedinput.min.js');

function shortcode_car_calc()
{
    wp_enqueue_style('car_calc_style');
    //wp_enqueue_style('wnd_calc_bpopup');

    wp_enqueue_script('car_calc_script');
    //wp_enqueue_script('wnd_calc_order_popup_script');

    wp_enqueue_script('popper-js');
    wp_enqueue_script('bootstrap-js');
    wp_enqueue_style('bootstrap-css');
    //wp_enqueue_script('maskedinput-js');

    wp_enqueue_style('sweetalert2-css');
    wp_enqueue_script('sweetalert2-js');

    wp_enqueue_script('polyfill_ES6');

    wp_enqueue_script('maskedinput-js');

    ob_start();
    require_once 'template.php';
    $content = ob_get_contents();
    ob_end_clean();
    return $content;
}

add_shortcode('car_calculator', 'shortcode_car_calc');
