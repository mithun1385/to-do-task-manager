using TodotaskHandler as service from '../../srv/cat-service';
annotate service.todotask with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'title',
                Value : title,
            },
            {
                $Type : 'UI.DataField',
                Label : 'status',
                Value : status,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'title',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Label : 'status',
            Value : status,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'TodotaskHandler.EntityContainer/create',
            Label : 'create',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'TodotaskHandler.completeTask',
            Label : '{i18n>UpdateStatus}',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'TodotaskHandler.deleteTask',
            Label : 'deleteTask',
        },
    ],
);

