let data = {
    'widgets': [
        {
          'widgetId': 1,
          'widgetType': 1,
          'widgetTypeName': '单行输入框',
          'widgetTitle': '控件标题',
          'widgetContent': {
            'textContent': '控件内容'
          },
          'placeholder': '提示文字',
          'required': true,
          'conditional': false,
          'defaultConditions': []
        },
        {
          'widgetId': 2,
          'widgetType': 3,
          'widgetTypeName': '数字输入框',
          'widgetTitle': '控件标题',
          'widgetContent': {
            'decimalContent': 0,
            'textContent': ''
          },
          'placeholder': '提示文字',
          'countUnit': '计量单位',
          'required': true,
          'conditional': true,
          'defaultConditions': [
            '大于',
            '小于',
            '等于'
          ]
        },
        {
          'widgetId': 3,
          'widgetType': 10,
          'widgetTypeName': '部门',
          'widgetTitle': '控件标题',
          'widgetContent': {
            'deptContent': '控件内容',
            'textContent': ''
          },
          'placeholder': '提示文字',
          'isSingle': '填写方式 多选/单选',
          'required': false,
          'conditional': true,
          'defaultConditions': [
            '属于',
            '不属于'
          ]
        },
        {
          'widgetId': 4,
          'widgetType': 10,
          'widgetTypeName': '部门4',
          'widgetTitle': '控件标题',
          'widgetContent': {
            'deptContent': '控件内容',
            'textContent': ''
          },
          'placeholder': '提示文字',
          'isSingle': '填写方式 多选/单选',
          'required': false,
          'conditional': true,
          'defaultConditions': [
            '属于',
            '不属于'
          ]
        },
        {
          'widgetId': 5,
          'widgetType': 10,
          'widgetTypeName': '部门5',
          'widgetTitle': '控件标题',
          'widgetContent': {
            'deptContent': '控件内容',
            'textContent': ''
          },
          'placeholder': '提示文字',
          'isSingle': '填写方式 多选/单选',
          'required': false,
          'conditional': true,
          'defaultConditions': [
            '属于',
            '不属于'
          ]
        }
      ],
      'flowElements': [
        {
          'sid': 'sid-开始节点',
          'type': 'StartEvent',
          'approver': [],
          'copy': [],
          'conditions': [
            {
              'id': 2,
              'priority': 1,
              'type': 'or/and',
              'condition': [
                {
                  'widgetId': 2,
                  'operator': '大于',
                  'value': '10'
                },
                {
                  'widgetId': 3,
                  'operator': '属于',
                  'value': '23'
                }
              ],
              'targetUserTask': 'sid-用户任务1',
              'targetLine': 'sid-xxxxx-xxxxx-xxxxx-kgfgj'
            },
            {
              'id': 2,
              'priority': 2,
              'type': 'or/and',
              'condition': [
                {
                  'widgetId': 2,
                  'operator': '小于等于',
                  'value': '10'
                },
                {
                  'widgetId': 3,
                  'operator': '不属于',
                  'value': '23'
                }
              ],
              'targetUserTask': 'sid-用户任务2',
              'targetLine': 'sid-xxxxx-xxxxx-xxxxx-vnoew'
            }
          ]
        },
        {
          'sid': 'sid-用户任务1',
          'type': 'UserTask',
          'approveType': '会签',
          'approver': [
            '人1（发起人）',
            '人2（项目创建人）',
            '人3（系统角色）',
            '人4（指定人员）',
            '人5（上一部执行人）',
            '人6（已冻结）'
          ],
          'copy': [
            '抄送人1（发起人）',
            '人2（项目创建人）',
            '人3（系统角色）',
            '人4（指定人员）',
            '人5（上一部执行人）',
            '人6（已冻结）'
          ],
          'conditions': [
            {
              'id': 2,
              'priority': 1,
              'type': 'or/and',
              'condition': [
                {
                  'widgetId': 4,
                  'operator': '大于',
                  'value': '10'
                },
                {
                  'widgetId': 5,
                  'operator': '属于',
                  'value': '23'
                }
              ],
              'targetUserTask': 'sid-用户任务4',
              'targetLine': 'sid-xxxxx-xxxxx-xxxxx-kgfgj'
            },
            {
              'id': 2,
              'priority': 2,
              'type': 'or/and',
              'condition': [
                {
                  'widgetId': 4,
                  'operator': '小于等于',
                  'value': '10'
                },
                {
                  'widgetId': 5,
                  'operator': '不属于',
                  'value': '23'
                }
              ],
              'targetUserTask': 'sid-用户任务5',
              'targetLine': 'sid-xxxxx-xxxxx-xxxxx-vnoew'
            }
          ]
        },
        {
          'sid': 'sid-用户任务2',
          'type': 'UserTask',
          'approveType': '会签',
          'approver': [
            '人11（发起人）',
            '人21（项目创建人）',
            '人31（系统角色）',
            '人41（指定人员）',
            '人51（上一部执行人）',
            '人61（已冻结）'
          ],
          'copy': [
            '抄送人11（发起人）',
            '人21（项目创建人）',
            '人31（系统角色）',
            '人41（指定人员）',
            '人51（上一部执行人）',
            '人61（已冻结）'
          ],
          'conditions': [
            {
              'id': '',
              'priority': '',
              'type': 'EndEvent',
              'condition': [],
              'targetUserTask': 'sid-结束节点',
              'targetLine': 'sid-xxxxx-xxxxx-xxxxx-vnoew'
            }
          ]
        },
        {
          'sid': 'sid-用户任务4',
          'type': 'UserTask',
          'approveType': '会签',
          'approver': [
            '4--人11（发起人）',
            '4-人21（项目创建人）',
            '4--人31（系统角色）',
            '人41（指定人员）',
            '人51（上一部执行人）',
            '人61（已冻结）'
          ],
          'copy': [
            '抄送4----人11（发起人）',
            '人21（项目创建人）',
            '人31（系统角色）',
            '人41（指定人员）',
            '人51（上一部执行人）',
            '人61（已冻结）'
          ],
          'conditions': [
            {
              'id': '',
              'priority': '',
              'type': 'EndEvent',
              'condition': [],
              'targetUserTask': 'sid-结束节点',
              'targetLine': 'sid-xxxxx-xxxxx-xxxxx-vnoew'
            }
          ]
        },
        {
          'sid': 'sid-用户任务5',
          'type': 'UserTask',
          'approveType': '会签',
          'approver': [
            '5--人11（发起人）',
            '5-人21（项目创建人）',
            '5--人31（系统角色）',
            '人41（指定人员）',
            '人51（上一部执行人）',
            '人61（已冻结）'
          ],
          'copy': [
            '抄送5---人11（发起人）',
            '人21（项目创建人）',
            '人31（系统角色）',
            '人41（指定人员）',
            '人51（上一部执行人）',
            '人61（已冻结）'
          ],
          'conditions': [
            {
              'id': '',
              'priority': '',
              'type': 'EndEvent',
              'condition': [],
              'targetUserTask': 'sid-结束节点',
              'targetLine': 'sid-xxxxx-xxxxx-xxxxx-vnoew'
            }
          ]
        },
        {
          'sid': 'sid-结束节点',
          'type': 'EndEvent',
          'approver': [],
          'copy': [],
          'conditions': []
        }
      ]
}


export default data