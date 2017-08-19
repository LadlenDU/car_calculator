<?php
/**
 * Plugin Name: Калькулятор цен автомобилей
 * Description: Отправляет заявку на расчет цен на автомобили.
 * Version: 1.0
 */


function wnd_calc_scripts()
{
    wp_enqueue_script('jquery');
    //wp_enqueue_script('jquery-effects-core');

    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/js/bootstrap.js');
    wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/css/bootstrap.css');
}

add_action('wp_enqueue_scripts', 'wnd_calc_scripts');


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


//wp_enqueue_script('jquery');

wp_register_style('car_calc_style', plugins_url('', __FILE__) . '/template.css');
//wp_register_style('wnd_calc_bpopup', plugins_url('', __FILE__) . '/bpopup.css');

//wp_register_script('jquery-effects-core');    // wrong params
wp_register_script('car_calc_script', plugins_url('', __FILE__) . '/template.js', ['jquery']);
//wp_register_script('wnd_calc_order_popup_script', plugins_url('', __FILE__) . '/jquery.bpopup.min.js', ['jquery']);

function shortcode_car_calc()
{
    wp_enqueue_style('car_calc_style');
    //wp_enqueue_style('wnd_calc_bpopup');

    wp_enqueue_script('car_calc_script');
    //wp_enqueue_script('wnd_calc_order_popup_script');

    ob_start();
    require_once 'template.php';
    $content = ob_get_contents();
    ob_end_clean();
    return $content;
}

add_shortcode('car_calculator', 'shortcode_car_calc');
