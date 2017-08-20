<script>
    var wndSelPluginPath = <?php echo json_encode(plugins_url('', __FILE__)) ?>;
</script>
<div class="text-block">
    <h1>Оценка авто на онлайн-калькуляторе</h1>
    <p></p>
    <div id="form-online">
        <form method="post">
            <input type="hidden" value="make_order" name="action">
            <div class="form-group">
                <div class="row">
                    <div class="name col-sm-3"><span>Марка автомобиля</span></div> <!-- .table-cell -->
                    <div class="param col-sm-9">
                        <select name="brand" id="brands" class="form-control selectized">
                            <option selected="" disabled="">Выберите марку своего автомобиля</option>
                        </select>
                    </div> <!-- .table-cell --> </div> <!-- .table-row --> </div>
            <div class="form-group">
                <div class="row">
                    <div class="name col-sm-3"><span>Модель автомобиля</span></div> <!-- .table-cell -->
                    <div class="param col-sm-9">
                        <select name="model" id="models" class="form-control selectized">
                            <option selected="" disabled="">Выберите модель своего автомобиля</option>
                        </select>
                    </div> <!-- .table-cell --> </div> <!-- .table-row --> </div>
            <div class="form-group">
                <div class="row">
                    <div class="name col-sm-3"><span>Год выпуска по ПТС</span></div> <!-- .table-cell -->
                    <div class="param col-sm-9"><select name="year" class="form-control">
                            <option selected="" disabled="">Выберите из списка</option>
                            <option>1980</option>
                            <option>1981</option>
                            <option>1982</option>
                            <option>1983</option>
                            <option>1984</option>
                            <option>1985</option>
                            <option>1986</option>
                            <option>1987</option>
                            <option>1988</option>
                            <option>1989</option>
                            <option>1990</option>
                            <option>1991</option>
                            <option>1992</option>
                            <option>1993</option>
                            <option>1994</option>
                            <option>1995</option>
                            <option>1996</option>
                            <option>1997</option>
                            <option>1998</option>
                            <option>1999</option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                        </select></div> <!-- .table-cell --> </div> <!-- .table-row --> </div>
            <div class="form-group">
                <div class="row">
                    <div class="name col-sm-3"><span>Коробка передач</span></div> <!-- .table-cell -->
                    <div class="param col-sm-9"><select name="korobka" class="form-control required" id="korobka">
                            <option selected="">Механическая</option>
                            <option>Автомат</option>
                            <option>- АКПП</option>
                            <option>- Вариатор</option>
                            <option>- Робот</option>
                        </select></div> <!-- .table-cell --> </div>
            </div> <!-- .table-row -->
            <div class="form-group">
                <div class="row">
                    <div class="name col-sm-3"><span>Пробег</span></div> <!-- .table-cell -->
                    <div class="param col-sm-9"><select name="probeg" id="probeg" class="form-control">
                            <option selected="">5000</option>
                            <option>10 000 до 20 000</option>
                            <option>20 000 до 30 000</option>
                            <option>30 000 до 40 000</option>
                            <option>40 000 до 50 000</option>
                            <option>50 000 до 60 000</option>
                            <option>60 000 до 70 000</option>
                            <option>70 000 до 80 000</option>
                            <option>80 000 до 90 000</option>
                            <option>90 000 до 100 000</option>
                            <option>100 000 до 110 000</option>
                            <option>110 000 до 120 000</option>
                            <option>120 000 до 130 000</option>
                            <option>130 000 до 140 000</option>
                            <option>140 000 до 150 000</option>
                            <option>150 000 до 160 000</option>
                            <option>160 000 до 170 000</option>
                            <option>170 000 до 180 000</option>
                            <option>180 000 до 190 000</option>
                            <option>190 000 до 200 000</option>
                            <option>более 200 000</option>
                        </select></div> <!-- .table-cell --> </div> <!-- .table-row --> </div>
            <div class="form-group">
                <div class="row">
                    <div class="name col-sm-3">
                        <span>Есть ли <b>значительные</b> повреждения<br> по кузову автомобиля?</span></div>
                    <!-- .table-cell -->
                    <div class="param col-sm-3">
                        <div class="checkbox checkbox-primary"><input id="bz" value="Бампер зад" name="povrejdeniya[]"
                                                                      type="checkbox"> <label
                                    for="bz"><span>Бампер зад</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="bp" value="Бампер передний"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="bp"><span>Бампер передний</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="dzl" value="Дверь Задняя Левая"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="dzl"><span>Дверь Задняя Левая</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="dzp" value="Дверь Задняя Правая"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="dzp"><span>Дверь Задняя Правая</span></label></div>
                    </div>
                    <div class="param col-sm-3">
                        <div class="checkbox checkbox-primary"><input id="dpl" value="Дверь передняя Левая"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="dpl"><span>Дверь передняя Левая</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="dpr" value="Дверь передняя Правая"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="dpr"><span>Дверь передняя Правая</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="kpl" value="Крыло переднее Лево"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="kpl"><span>Крыло переднее Левое</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="kpp" value="Крыло переднее Правое"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="kpp"><span>Крыло переднее Правое</span></label></div>
                    </div>
                    <div class="param col-sm-3">
                        <div class="checkbox checkbox-primary"><input id="kzl" value="Крыло Заднее Левое"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="kzl"><span>Крыло Заднее Левое</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="kzp" value="Крыло Заднее Правое"
                                                                      name="povrejdeniya[]" type="checkbox"> <label
                                    for="kzp"><span>Крыло Заднее Правое</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="bogaj" value="Багажник" name="povrejdeniya[]"
                                                                      type="checkbox"> <label
                                    for="bogaj"><span>Багажник</span></label></div>
                        <div class="checkbox checkbox-primary"><input id="kop" value="Капот" name="povrejdeniya[]"
                                                                      type="checkbox"> <label
                                    for="kop"><span>Капот</span></label></div>
                    </div> <!-- .table-cell --> </div> <!-- .table-row --> </div>
            <div class="form-group">
                <div class="row">
                    <div class="name col-sm-3">
                        <span><b>Результат калькуляции</b> сообщим на указанный Вами телефон</span> <br> <span
                                class="isbold">(это ни к чему не обязывает)</span></div> <!-- .table-cell -->
                    <div class="param col-sm-9">
                        <div class="raschet"><span>Расчет выполняет автоэксперт с учетом <span class="isbold">сегодняшних цен на рынке</span></span>
                        </div>
                        <input name="phone" class="required rfield form-control" placeholder="+7 (___) ___ __ __"
                               id="user_phone" type="text"></div> <!-- .table-cell --> </div> <!-- .table-row --> </div>
            <div class="row">
                <div class="name col-sm-3"><span>Расчет займет не более 2-х минут</span></div> <!-- .table-cell -->
                <div class="param col-sm-9"><input name="form" value="online-calc" type="hidden">
                    <button value="Рассчитать стоимость автомобиля" type="submit" class="submitSend btn btn-danger">
                        Рассчитать стоимость <span class="hidden-xs">автомобиля</span></button>
                </div> <!-- .table-cell --> </div> <!-- .table-row --> </form>
    </div> <!-- #form-online -->
</div>