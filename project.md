
# Useful Command and steps

Create Angular Project. 
```
ng new AppName --standalone false --routing --style scss
```

### Create Lazy Loaded Module 

```
ng generate module salad --routing --route salad --module app.module
```

### Create Componetes in Salad Module
- Salad Page component
```
ng g c salad/salad-page --module salad 
```

- Create topping-list
```
ng g c salad/topping-list --module salad
```