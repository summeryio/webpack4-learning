import _ from 'lodash'
import $ from 'jquery'

const oDiv = $('<div>')
oDiv.html(_.join(['aaa', 'bbb', 'ccc'], '-'))
$(document.body).append(oDiv)